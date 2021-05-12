<template>
    <header class="fixed-header_Desktop">
        <div v-if="$device.isMobileOrTablet">
            <div class="container content_mob_mn" :class="{sticky: scrollPosition > 50}">
                <div class="row">
                    <div class="col-5 logo_mobile">
                        <a href="/" class="">
                            <img class="" src="~/assets/img/logo.png" alt="Medespoir Egypte">
                        </a>
                    </div>
                    <div class="col-5 devis_header">
                        <a href="#" class="">Devis express</a>
                    </div>
                    <div class="col-2" id="burger"
                        :class="{'active' : isOpen}"
                        @click.prevent="toggle">
                        <slot>
                            <button type="button" class="burger-button" title="Menu">
                                <span class="hidden">Toggle menu</span>
                                <span class="burger-bar burger-bar--1"></span>
                                <span class="burger-bar burger-bar--2"></span>
                                <span class="burger-bar burger-bar--3"></span>
                            </button>
                        </slot>
                    </div>
                    <div class="sidebar">
                        <div class="sidebar-backdrop" v-if="isPanelOpen"></div>
                        <transition name="slide">
                            <div v-if="isPanelOpen"
                                class="sidebar-panel">
                                <nav>
                                    <ul class="main_nav_mobile">
                                        <li><NuxtLink to="/">Accueil</NuxtLink></li>
                                        <li><NuxtLink to="/cliniques">Les cliniques en Egypte</NuxtLink></li>
                                        <li><NuxtLink to="/">Les chirurgiens en Egypte</NuxtLink></li>
                                        <li class="main-has-child-mobile" :class="{'sub_is_clicked' : DropDown == 1}"><a class="js-pointer-large" href="#">Dentisterie</a><span  @click="DropDown = 1" class="drop_down"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" fill="rgba(255,255,255,1)"/></svg></span>
                                            <ul class="sub-menu-mob">
                                                <li><NuxtLink to="/implant-dentaire">Implant dentaire</NuxtLink></li>
                                                <li><NuxtLink to="/facette-dentaire">Facette dentaire</NuxtLink></li>
                                                <li><NuxtLink to="/chirurgie-gencives">Chirurgie des gencives</NuxtLink></li>
                                                <li><NuxtLink to="/orthodontie">Orthodontie</NuxtLink></li>
                                                <li><NuxtLink to="/hollywood-smile">Hollywood Smile</NuxtLink></li>
                                                <li><NuxtLink to="/blanchiment-dents">Blanchiment dents</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li class="main-has-child-mobile" :class="{'sub_is_clicked' : DropDown == 2}"><a class="js-pointer-large" href="#">Traitement de l’infertilité</a><span  @click="DropDown = 2" class="drop_down"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" fill="rgba(255,255,255,1)"/></svg></span>
                                            <ul class="sub-menu-mob">
                                                <li><NuxtLink to="/fecondation-in-vitro">Fécondation in-vitro</NuxtLink></li>
                                                <li><NuxtLink to="/insemination">Insémination intra-utérine (IUU)</NuxtLink></li>
                                                <li><NuxtLink to="/biopsie-testiculaire">Biopsie testiculaire</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li class="main-has-child-mobile" :class="{'sub_is_clicked' : DropDown == 3}"><a class="js-pointer-large" href="#">Esthétique du visage</a><span  @click="DropDown = 3" class="drop_down"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" fill="rgba(255,255,255,1)"/></svg></span>
                                            <ul class="sub-menu-mob">
                                                <li><NuxtLink to="/lifting-visage">Lifting Visage</NuxtLink></li>
                                                <li><NuxtLink to="/fils-tenseurs">Fils tenseurs</NuxtLink></li>
                                                <li><NuxtLink to="/lifting-endoscopique">Lifting endoscopique</NuxtLink></li>
                                                <li><NuxtLink to="/rhinoplastie">Rhinoplastie</NuxtLink></li>
                                                <li><NuxtLink to="/blepharoplastie">Blépharoplastie</NuxtLink></li>
                                                <li><NuxtLink to="/otoplastie">Otoplastie</NuxtLink></li>
                                                <li><NuxtLink to="/genioplastie">Génioplastie</NuxtLink></li>
                                                <li><NuxtLink to="/lipofilling-visage">Lipofilling visage et cou</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li class="main-has-child-mobile" :class="{'sub_is_clicked' : DropDown == 4}"><a class="js-pointer-large" href="#">Esthétique du corps</a><span  @click="DropDown = 4" class="drop_down"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" fill="rgba(255,255,255,1)"/></svg></span>
                                            <ul class="sub-menu-mob">
                                                <li><NuxtLink to="/bodylift">Bodylift</NuxtLink></li>
                                                <li><NuxtLink to="/liposuccion">Liposuccion</NuxtLink></li>
                                                <li><NuxtLink to="/liposuccion-vaser">Liposuccion Vaser</NuxtLink></li>
                                                <li><NuxtLink to="/abdominoplastie">Abdominoplastie</NuxtLink></li>
                                                <li><NuxtLink to="/augmentation-fesses">Augmentation fesses par prothèses</NuxtLink></li>
                                                <li><NuxtLink to="/lipofilling-fesses">Lipofilling fesses</NuxtLink></li>
                                                <li><NuxtLink to="/lifting-bresilien">Lifting brésilien</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li class="main-has-child-mobile" :class="{'sub_is_clicked' : DropDown == 5}"><a class="js-pointer-large" href="#">Esthétique des seins</a><span  @click="DropDown = 5" class="drop_down"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" fill="rgba(255,255,255,1)"/></svg></span>
                                            <ul class="sub-menu-mob">
                                                <li><NuxtLink to="/augmentation-mammaire">Augmentation mammaire par implants</NuxtLink></li>
                                                <li><NuxtLink to="/lipofilling-mammaire">Lipofilling mammaire</NuxtLink></li>
                                                <li><NuxtLink to="/reduction-mammaire">Réduction mammaire</NuxtLink></li>
                                                <li><NuxtLink to="/lifting-mammaire">Lifting mammaire</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li class="main-has-child-mobile" :class="{'sub_is_clicked' : DropDown == 6}"><a class="js-pointer-large" href="#">Traitement du surpoids</a><span  @click="DropDown = 6" class="drop_down"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" fill="rgba(255,255,255,1)"/></svg></span>
                                            <ul class="sub-menu-mob">
                                                <li><NuxtLink to="/ballon-gastrique">Ballon gastrique</NuxtLink></li>
                                                <li><NuxtLink to="/bypass-gastrique">Bypass gastrique</NuxtLink></li>
                                                <li><NuxtLink to="/sleeve-gastrique">Sleeve gastrique</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li class="main-has-child-mobile" :class="{'sub_is_clicked' : DropDown == 7}"><a class="js-pointer-large" href="#">Transplantation capillaire</a><span  @click="DropDown = 7" class="drop_down"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" fill="rgba(255,255,255,1)"/></svg></span>
                                            <ul class="sub-menu-mob">
                                                <li><NuxtLink to="/greffe-cheveux">Greffe de cheveux</NuxtLink></li>
                                                <li><NuxtLink to="/greffe-barbe">Greffe de barbe</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li class="main-has-child-mobile" :class="{'sub_is_clicked' : DropDown == 8}"><a class="js-pointer-large" href="#">Chirurgie Intime </a><span  @click="DropDown = 8" class="drop_down"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" fill="rgba(255,255,255,1)"/></svg></span>
                                            <ul class="sub-menu-mob">
                                                <li><NuxtLink to="/hymenoplastie">Hyménoplastie</NuxtLink></li>
                                                <li><NuxtLink to="/penoplastie">Pénoplastie</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li><NuxtLink to="/chirurgiens-esthetiques">Chirurgiens esthétiques</NuxtLink></li>
                                        <li><NuxtLink to="/pourquoi-egypte">Pourquoi choisir l’Egypte ?</NuxtLink></li>
                                        <li><NuxtLink to="/sejour">Détails sur votre séjour</NuxtLink></li>
                                        <li id="item_devis"><NuxtLink to="#">Devis gratuit</NuxtLink></li>
                                    </ul>
                                </nav>
                                <slot></slot>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="container_navheader" :class="{scrollDesk: scrollPosition > 150}">
            <div class="containerXD">
                <div class="header_white">
                    <div class="logo">
                        <div class="">
                            <a href="/" class="">
                                <img class="" src="~/assets/img/logo_desktop.png" alt="Medespoir Egypte">
                            </a>
                        </div>
                    </div>
                    <nav class="navbar">
                            <ul class="main_nav">
                                <li><NuxtLink to="/">Accueil</NuxtLink></li>
                                <li><NuxtLink to="/cliniques">Les cliniques</NuxtLink></li>
                                <li><NuxtLink to="/">Les chirurgiens</NuxtLink></li>
                                <li class="main-has-child"><a class="js-pointer-large" href="#">Intervention</a>
                                    <ul class="sub-menu-1">
                                        <li><NuxtLink to="#">Dentisterie</NuxtLink>
                                            <ul class="sub-menu-2">
                                                <li><NuxtLink to="/implant-dentaire">Implant dentaire</NuxtLink></li>
                                                <li><NuxtLink to="/facette-dentaire">Facette dentaire</NuxtLink></li>
                                                <li><NuxtLink to="/chirurgie-gencives">Chirurgie des gencives</NuxtLink></li>
                                                <li><NuxtLink to="/orthodontie">Orthodontie</NuxtLink></li>
                                                <li><NuxtLink to="/hollywood-smile">Hollywood Smile</NuxtLink></li>
                                                <li><NuxtLink to="/blanchiment-dents">Blanchiment dents</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li><NuxtLink to="#">Traitement de l’infertilité</NuxtLink>
                                            <ul class="sub-menu-2">
                                                <li><NuxtLink to="/fecondation-in-vitro">Fécondation in-vitro</NuxtLink></li>
                                                <li><NuxtLink to="/insemination">Insémination intra-utérine (IUU)</NuxtLink></li>
                                                <li><NuxtLink to="/biopsie-testiculaire">Biopsie testiculaire</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li><NuxtLink to="#">Esthétique du visage</NuxtLink>
                                            <ul class="sub-menu-2">
                                                <li><NuxtLink to="/lifting-visage">Lifting Visage</NuxtLink></li>
                                                <li><NuxtLink to="/fils-tenseurs">Fils tenseurs</NuxtLink></li>
                                                <li><NuxtLink to="/lifting-endoscopique">Lifting endoscopique</NuxtLink></li>
                                                <li><NuxtLink to="/rhinoplastie">Rhinoplastie</NuxtLink></li>
                                                <li><NuxtLink to="/blepharoplastie">Blépharoplastie</NuxtLink></li>
                                                <li><NuxtLink to="/otoplastie">Otoplastie</NuxtLink></li>
                                                <li><NuxtLink to="/genioplastie">Génioplastie</NuxtLink></li>
                                                <li><NuxtLink to="/lipofilling-visage">Lipofilling visage et cou</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li><NuxtLink to="#">Esthétique du corps</NuxtLink>
                                            <ul class="sub-menu-2">
                                                <li><NuxtLink to="/bodylift">Bodylift</NuxtLink></li>
                                                <li><NuxtLink to="/liposuccion">Liposuccion</NuxtLink></li>
                                                <li><NuxtLink to="/liposuccion-vaser">Liposuccion Vaser</NuxtLink></li>
                                                <li><NuxtLink to="/abdominoplastie">Abdominoplastie</NuxtLink></li>
                                                <li><NuxtLink to="/augmentation-fesses">Augmentation fesses par prothèses</NuxtLink></li>
                                                <li><NuxtLink to="/lipofilling-fesses">Lipofilling fesses</NuxtLink></li>
                                                <li><NuxtLink to="/lifting-bresilien">Lifting brésilien</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li><NuxtLink to="#">Esthétique des seins</NuxtLink>
                                            <ul class="sub-menu-2">
                                                <li><NuxtLink to="/augmentation-mammaire">Augmentation mammaire par implants</NuxtLink></li>
                                                <li><NuxtLink to="/lipofilling-mammaire">Lipofilling mammaire</NuxtLink></li>
                                                <li><NuxtLink to="/reduction-mammaire">Réduction mammaire</NuxtLink></li>
                                                <li><NuxtLink to="/lifting-mammaire">Lifting mammaire</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li><NuxtLink to="#">Traitement du surpoids</NuxtLink>
                                            <ul class="sub-menu-2">
                                                <li><NuxtLink to="/ballon-gastrique">Ballon gastrique</NuxtLink></li>
                                                <li><NuxtLink to="/bypass-gastrique">Bypass gastrique</NuxtLink></li>
                                                <li><NuxtLink to="/sleeve-gastrique">Sleeve gastrique</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li><NuxtLink to="#">Transplantation capillaire</NuxtLink>
                                            <ul class="sub-menu-2">
                                                <li><NuxtLink to="/greffe-cheveux">Greffe de cheveux</NuxtLink></li>
                                                <li><NuxtLink to="/greffe-barbe">Greffe de barbe</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li><NuxtLink to="#">Chirurgie Intime</NuxtLink>
                                            <ul class="sub-menu-2">
                                                <li><NuxtLink to="/hymenoplastie">Hyménoplastie</NuxtLink></li>
                                                <li><NuxtLink to="/penoplastie">Pénoplastie</NuxtLink></li>
                                            </ul>
                                        </li>
                                        <li><NuxtLink to="/chirurgiens-esthetiques">Chirurgiens esthétiques</NuxtLink></li>
                                    </ul>
                                </li>
                                <li><NuxtLink to="/pourquoi-egypte">Pourquoi choisir l’Egypte ?</NuxtLink></li>
                                <li><NuxtLink to="/sejour">Votre séjour</NuxtLink></li>
                                <li id="item_devis"><NuxtLink to="#">Devis gratuit</NuxtLink></li>
                            </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        data() {
            return {
                isOpen: false,
                isPanelOpen: false,
                scrollPosition: null,
                DropDown: undefined,
                DropDownU: undefined
            }
        },
        methods: {
            toggle() {
                this.isOpen = !this.isOpen,
                this.isPanelOpen = !this.isPanelOpen
                
            },
            clicked(){
                //this.DropDown = !this.DropDown
            },
            updateScroll() {
                this.scrollPosition = window.scrollY
            }
        },
        mounted() {
            window.addEventListener('scroll', this.updateScroll);
            window.addEventListener('scrollDesk', this.updateScroll);
        }
    }
</script>