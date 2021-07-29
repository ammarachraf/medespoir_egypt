<template>
    <footer id="main-footer">
        <div v-if="$device.isMobileOrTablet" class="menu_subfooter">
                <div id="circularMenu1" class="circular-menu circular-menu-left" @click="myFilter" :class="{'active' : IsActive}">
                    <a class="floating-btn" ><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="29" height="29"><path fill="none" d="M0 0H24V24H0z"/><path d="M21 18v2H3v-2h18zM17.404 3.904L22 8.5l-4.596 4.596-1.414-1.414L19.172 8.5 15.99 5.318l1.414-1.414zM12 11v2H3v-2h9zm0-7v2H3V4h9z" fill="rgba(5,25,55,1)"/></svg></div></a>
                    <menu class="items-wrapper">
                        <NuxtLink to="#" class="menu-item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path fill="none" d="M0 0h24v24H0z"/><path d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z" fill="rgba(25,32,77,1)"/></svg></NuxtLink>
                        <NuxtLink to="#" class="menu-item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" fill="rgba(25,32,77,1)"/></svg></NuxtLink>
                        <NuxtLink to="#" class="menu-item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.803 8.493A5.023 5.023 0 0 0 22 8.9V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13.1c-.066.323-.1.658-.1 1a4.98 4.98 0 0 0 1.193 3.241l-5.132 4.442-6.414-5.445-1.294 1.524 7.72 6.555 6.73-5.824zM21 7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="rgba(25,32,77,1)"/></svg></NuxtLink>
                        <NuxtLink to="#" class="menu-item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path fill="none" d="M0 0h24v24H0z"/><path d="M22 13h-2V7h-8.414l-2-2H4v14h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v7zm-2 4h3v2h-3v3.5L15 18l5-4.5V17z" fill="rgba(25,32,77,1)"/></svg></NuxtLink>
                    </menu>
                </div>
        </div> 
        <div class="container-fluid pt-5 pb-5">
            <div class="container pt-2 pb-2">
                <div class="row justify-content-end">
                    <div class="col-md-10">
                        <div class="row">
                            <div class="col-md-4">
                                <NuxtLink to="/"><img style="max-width:200px" src="~/assets/img/logo_desktop.png" alt=""></NuxtLink>
                                <div class="pt-2 mt-3" style="clear:both;position:relative;">
                                    <div class="icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" fill="rgba(255,255,255,1)"/></svg></div>
                                    <div class="content-ic"><NuxtLink to="tel:+33(0)184800400">+33 (0)1 84 800 400</NuxtLink><NuxtLink to="tel:+33(0)184800400">+33 (0)1 84 800 400</NuxtLink></div>
                                </div>
                                <div class="pt-2" style="clear:both;position:relative;">
                                    <div class="icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l.013-.007.87 2.87c.112.311.266.367.453.341.188-.025.287-.126.41-.244l1.188-1.148 2.55 1.888c.466.257.801.124.917-.432l1.657-7.822c.183-.728-.137-1.02-.702-.788l-9.733 3.76c-.664.266-.66.638-.12.803l2.497.78z" fill="rgba(255,255,255,1)"/></svg></div>
                                    <div class="content-ic"><NuxtLink to="mailto:devis@medespoir.com">devis@medespoir.com</NuxtLink></div>
                                </div>
                            </div>
                            <div class="col-md-4 pt-3">
                                <h3>A propos</h3>
                                <p>Le recours à la chirurgie esthétique au Maroc s’est beaucoup développé ces dernières années. On recense 40 milles opérations de chirurgie esthétique au Maroc pratiquées en 2020, c’est trois fois plus que l’année précédente.</p>
                            </div>
                            <div class="col-md-4 pt-3">
                                <h3>Quick Links</h3>
                                <ul class="link-footer">
                                    <li><NuxtLink to="/">Accueil</NuxtLink></li>
                                    <li><NuxtLink to="#">Devis Rapide</NuxtLink></li>
                                    <li><NuxtLink to="#">Notre Clinique</NuxtLink></li>
                                    <li><NuxtLink to="#">Séjour</NuxtLink></li>
                                    <li><NuxtLink to="#">Interventions</NuxtLink></li>
                                    <li><NuxtLink to="#">Tarifs</NuxtLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright-medespoir-egypte@2021</p>
        </div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            IsActive: false,
        }
    },
    methods: {
        myFilter() {
            this.IsActive = !this.IsActive;
        }
    }
}
</script>