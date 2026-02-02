function productIntro() {
    const productIntros = document.querySelectorAll('[data-js="productIntro"]')
    
    if(productIntros.length < 1) return

    productIntros.forEach(section => {
        const sliderBlock = section.querySelector('[data-js="piSlider"]')
        const descText = section.querySelector('[data-js="productIntroText"]')

        if(sliderBlock) {
            const slider = sliderBlock.querySelector('[data-js="piSliderSlider"]')
            const wrapper = sliderBlock.querySelector('[data-js="piSliderWrapper"]')
            const thumbs = sliderBlock.querySelector('[data-js="piSliderThumbs"]')
            const controls = sliderBlock.querySelector('[data-js="sliderControls"]')
            const prev = controls.querySelector('[data-js="sliderPrev"]')
            const next = controls.querySelector('[data-js="sliderNext"]')

            const thumbsEx = new Swiper(thumbs, {
                slidesPerView: 'auto',
                spaceBetween: 6,
                breakpoints: {
                    501: {
                        spaceBetween: 10
                    },   
                    1801: {
                        spaceBetween: 20
                    }
                },
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
            })

            const sliderEx = new Swiper(slider, {
                slidesPerView: 1,
                spaceBetween: 10,
                on: {
                    afterInit: function() {
                        if(descText && wrapper && window.innerWidth >= 768) {
                            descText.style.height = wrapper.offsetHeight + 'px'
                        }
                    }
                }
            })

            let needSync = true

            thumbsEx.on('click', function(e) {
                const clickedIndex = this.clickedIndex;
                
                if (clickedIndex === 0) return;
                
                needSync = false;
                const mainIndex = clickedIndex - 1;
                sliderEx.slideTo(mainIndex);
            });

            sliderEx.on('slideChange', function() {
                if(needSync) {
                    const thumbsIndex = this.activeIndex + 1;
                    thumbsEx.slideTo(thumbsIndex);
                }

                needSync = true
            });
        }

        productIntroAnim(section)
    })

}

function productIntroAnim(section) {
    const title = section.querySelector('[data-js="productIntroTitle"]')
    const side = section.querySelector('[data-js="productIntroSide"]')

    if(title && side) {
        side.addEventListener('transitionstart', () => {
            opacityAnim(title)
        }, {once: true})
    } else if(title) {
        opacityAnim(title)
    }
}

function main3d(mtlFileLink, objFileLink) {
    const canvas = document.querySelector('#model_3d');
    const renderer = new THREE.WebGLRenderer({canvas, antialias: true});

    const fov = 45;
    const aspect = 2;
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(45, 45, 45);

    const controls = new THREE.OrbitControls(camera, canvas);
    controls.target.set(0, 5, 0);
    controls.update();

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#1B1B1B');

    var light = new THREE.AmbientLight( 0xFFFFFF, 1 );
    scene.add( light );

    var light = new THREE.PointLight( 0xFFFFFFF, 0.1, 0 );
    light.position.set( 0, 1000, -1000 );
    scene.add( light );
    var light = new THREE.PointLight( 0xFFFFFFF, 0.2, 0 );
    light.position.set( 1000, -1000, 1000 );
    scene.add( light );

    function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
        const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
        const halfFovY = THREE.Math.degToRad(camera.fov * .5);
        const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
        const direction = (new THREE.Vector3())
            .subVectors(camera.position, boxCenter)
            .multiply(new THREE.Vector3(1, 0, 1))
            .normalize();

        camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

        camera.near = boxSize / 100;
        camera.far = boxSize * 100;

        camera.updateProjectionMatrix();

        camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
    }

    {
        const objLoader = new THREE.OBJLoader2();
        objLoader.loadMtl(mtlFileLink, null, (materials) => {
            objLoader.setMaterials(materials);
            objLoader.load(objFileLink, (event) => {


                const root = event.detail.loaderRootNode;
                scene.add(root);
                const box = new THREE.Box3().setFromObject(root);

                const boxSize = box.getSize(new THREE.Vector3()).length();
                const boxCenter = box.getCenter(new THREE.Vector3());

                frameArea(boxSize * 1.2, boxSize, boxCenter, camera);

                controls.maxDistance = boxSize * 10;
                controls.target.copy(boxCenter);
                controls.update();
                $('#d3-model-wrap').addClass('d3-model-wrap--after-loading');
            });
        });

        console.log(objLoader)

    }

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

    function render() {

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

    