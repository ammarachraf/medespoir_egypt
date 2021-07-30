<template>
    <div>
        <div v-if="$device.isMobileOrTablet" class="minSlider__Mobile">
            <div class="">
                <div class="">
                    <img src="@/assets/img/slider_mobile.jpg" alt="">
                </div>
            </div>
            <div class="bg_blue_slider">
                <div>
                    <h1>Chirurgie esthétique au Maroc</h1>
                    <p class="standard text-center width-80 mt-2">Medespoir est la référence du tourisme médical et esthétique qui répand son réseau de cliniques partenaires et de chirurgiens esthétiques collaborateurs partout dans le monde.</p>
                    <div class="btn_devis mt-2"><NuxtLink to="#">Devis express</NuxtLink></div>
                </div>
            </div>
        </div>
        <div v-else class="container-fluid minSlider__desktop clearfix">
            <div class="row">
                <div class="col-lg-5 col-md-5 col-12 offset-lg-1 offset-md-1 display-flex">
                    <div class="width-60 text-center">
                        <h1>Medespoir Egypte : Qu’est-ce qui fait notre grande renommée</h1>
                        <p class="standard mt-4">Medespoir est la référence du tourisme médical et esthétique qui répand son réseau de cliniques partenaires et de chirurgiens esthétiques collaborateurs partout dans le monde.</p>
                        <div class="btn_devis mt-4"><NuxtLink to="#">Devis express</NuxtLink></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>