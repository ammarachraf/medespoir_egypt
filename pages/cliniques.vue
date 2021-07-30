<template>
    <div class="__pages">
        <div class="top__title abdo">
            <div class="containerXD">
                <div class="row">
                    <div class="col-lg-5 col-md-5 col-12 display-flex">
                        <div class="width-60 text-center">
                            <h1>Cliniques de chirurgie esthétique en Egypte</h1>
                            <div class="btn_devis mt-4"><NuxtLink to="#">Devis express</NuxtLink></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="container">
            <div class="row">
                <div class="col-md-5 col-12"><img src="@/assets/img/img1-clinique.jpg" alt="Medespoir maroc"></div>
                <div class="col-md-7 col-12 mt-5">
                    <p class="color-blue">Les cliniques en Egypte proposent une chirurgie esthétique hautement spécialisée. En combinant la dernière technologie de précision avec le meilleur savoir-faire chirurgical, les patients bénéficient des meilleurs soins pré et postopératoires tout en profitant d’une expérience de première classe.<br><br>Nos chirurgiens plasticiens travaillent en étroite collaboration avec les patients pour fournir des solutions sur-mesure en chirurgie esthétique et reconstructive.</p>
                </div>
            </div>
        </section>
        <section class="devis_express mt-5 pt-5 pb-5">
            <div class="container">
                <h2 class="yellow mb-3 text-center">Devis Express en ligne</h2>
                <iframe frameborder="0" src="https://forms.zohopublic.com/highlight/form/MedespoircomExpress/formperma/kTOAYYPldfLDE4I67OaiiMq9xcRQzDPZLGGgnsSlQ8k" style="height:420px;width:100%;border:none"></iframe>
            </div>
        </section>
        <section class="bg-blue pt-5 pb-5">
            <div class="container">
                <h2 class="yellow mb-4">Pourquoi choisir nos cliniques de chirurgie esthétique en Egypte ?</h2>
                <p>Les cliniques en Egypte proposent les avantages suivants : </p>
                <h3 class="color-white">Art de la chirurgie esthétique</h3>
                <p>Chez Medespoir Egypte, nous intégrons l'art dans la profession et formons notre équipe dès le début pour percevoir la chirurgie esthétique comme un art et pas seulement comme un traitement. Chaque opération de chirurgie esthétique que nous effectuons est menée avec soin et avec un œil d'artiste pour le détail et la compétence qui complète la vision artistique du chirurgien.</p>
                <h3 class="color-white">Résultats naturels</h3>
                <p>Notre approche chirurgicale est basée sur l’idée de l'esthétique naturelle. Le mode de vie égyptien avec son appréciation de la beauté, de la simplicité, de la fonctionnalité et d'un mode de vie sain influence tout ce que nous faisons. Dans nos cliniques de chirurgie esthétique, nos chirurgiens plasticiens travaillent avec précision afin de fournir un résultat d'une apparence naturelle. Nos soins respectent l'équilibre et les proportions du visage et du corps, et produisent des résultats qui restaurent et améliorent, mais qui ne sont jamais exagérés.</p>
                <h3 class="color-white">Technologies de pointe</h3>
                <p>Les cliniques esthétiques en Egypte sont équipées de toutes les technologies de pointe nécessaires au diagnostic, au traitement et à la chirurgie. Nos salles d'opération sont instillées avec les derniers appareils pour assurer votre bien-être tout au long de l’intervention.<br>Nous avons une vaste expérience dans les techniques de haute précision et microchirurgicales. Ces méthodes informent notre travail à tous les niveaux, nous permettant d'exécuter des procédures qui seraient impossibles autrement et nous apportent un plus grand raffinement des résultats. De plus, nous travaillons avec notre propre gamme d'outils conçus sur-mesure et de technologies de pointe.</p>
                <div class="btn_devis mt-4 text-center"><NuxtLink to="#">Devis express</NuxtLink></div>
            </div>
        </section>
        <section class="container">
            <div class="row">
                <div class="col-md-5 col-12"><img src="@/assets/img/img2-clinique.jpg" alt="Medespoir maroc"></div>
                <div class="col-md-7 col-12">
                    <h3 class="color-blue mt-5">Une gamme de soins spécialisés</h3>
                    <p class="mt-3">Nous proposons un large éventail de traitements allant des interventions simples, telles que l'ablation de lésions cutanées mineures, à certaines des procédures de chirurgie esthétique et plastique les plus avancées. Notre expertise comprend une gamme complète de chirurgies faciales, de chirurgies mammaires, du remodelage du corps et de la médecine esthétique. Nos cliniques proposent également des traitements spécialisés de la peau et au laser pour un large éventail d'affections cutanées.</p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default({
    data() {
      return {
        title: 'Cliniques de chirurgie esthétique en Egypte'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Cliniques de chirurgie esthétique en Egypte' }
        ],
        htmlAttrs: {
            lang: 'fr'
        },
      }
    }
})
</script>