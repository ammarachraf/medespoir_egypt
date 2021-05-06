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
                    <p class="standard text-center width-80 mt-2">Le recours à la chirurgie esthétique au Maroc s’est beaucoup développé ces dernières années. On recense 40 milles opérations de chirurgie esthétique au Maroc pratiquées en 2020, c’est trois fois plus que l’année précédente.</p>
                    <div class="btn_devis mt-2"><NuxtLink to="/devis">Devis express</NuxtLink></div>
                </div>
            </div>
        </div>
        <div v-else class="container-fluid minSlider__desktop clearfix">
            <div class="row">
                <div class="col-lg-5 col-md-5 col-12 offset-lg-1 offset-md-1 display-flex">
                    <div class="width-60 text-center">
                        <h1>Medespoir Egypte : Qu’est-ce qui fait notre grande renommée</h1>
                        <p class="standard mt-4">Medespoir est la référence du tourisme médical et esthétique qui répand son réseau de cliniques partenaires et de chirurgiens esthétiques collaborateurs partout dans le monde. L’Egypte, une nouvelle destination qui s’ajoute à la liste, pour rendre ce luxe qu’est la chirurgie esthétique accessible à tous ceux qui ont en besoin, là où ils sont.</p>
                        <div class="btn_devis mt-4"><NuxtLink to="/devis">Devis express</NuxtLink></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>