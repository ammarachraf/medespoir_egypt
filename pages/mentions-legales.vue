<template>
    <div class="__pages">
        <div class="top__title abdo">
            <div class="containerXD">
                <div class="row">
                    <div class="col-lg-5 col-md-5 col-12 display-flex">
                        <div class="width-60 text-center">
                            <h1>Mentions Légales</h1>
                            <div class="btn_devis mt-4"><NuxtLink to="#">Devis express</NuxtLink></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="container">
            <div class="row">
                <div class="col-12 text-center mt-5">
                    <h2 class="yellow">Conditions d'utilisation du site Web de Medespoir</h2>
                    <p class="color-blue">Les informations médicales figurant sur ce site Web sont fournies à titre informatif et ont pour but de faciliter un dialogue de qualité lors de votre consultation.<br>Bien que Medespoir ait pris grand soin de fournir des informations précises et de les tenir à jour, nous ne pouvons pas garantir qu'elles sont complètes ou entièrement en accord avec votre situation.<br>Les informations sur le site Web de Medespoir Egypte ne doivent jamais être considérées comme un substitut aux soins professionnels apportés par un médecin ou un praticien agréé, qui seront adaptés à la situation personnelle du patient.<br>Medespoir ne peut être tenu responsable si vous vous fiez uniquement aux informations contenues dans ce site. Les informations contenues ne sont pas destinées à remplacer les conseils d'un professionnel de la santé, ni à se substituer à un diagnostic ou à un traitement médical.<br>Medespoir ne peut être tenu responsable envers quiconque de toute perte ou de tout dommage pouvant résulter de l'utilisation des informations contenues dans ce site.<br>Medespoir se réserve le droit de modifier ces conditions à tout moment, et vous acceptez de vous conformer à la version la plus récente de cet accord sur les conditions d'utilisation chaque fois que vous consultez et utilisez le site Web.  Il vous est donc conseillé de consulter les conditions d'utilisation chaque fois que vous consultez et utilisez le site Web.  N'utilisez pas le site Web si vous n'acceptez pas l'ensemble des conditions générales suivantes.<br>Medespoir ne donne aucune garantie de quelque nature que ce soit concernant ce site Web, y compris, mais sans s'y limiter, toute garantie d'exactitude, d'exhaustivité, d'actualité, de fiabilité ou d'adéquation à un usage particulier, ou toute garantie que ces pages, ou le serveur informatique qui les rend disponibles, sont exempts de virus ou d'autres éléments nuisibles, et ces garanties sont expressément rejetées.</p>
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
                <h2 class="yellow">Déclaration de confidentialité du site de Chirurgie esthétique de Medespoir</h2>
                <p>Medespoir respecte votre droit à la vie privée. Lorsque vous visitez notre site, nous pouvons recueillir des informations sur votre visite à deux niveaux différents :</p>
                <ul class="liste-page color-white">
                    <li>Les statistiques recueillies lors de votre navigation sur le site.</li>
                    <li>Les informations personnelles que vous nous donnez volontairement.</li>
                </ul>
                <p>Nous voulons que vous soyez conscient de la manière dont nous recueillons et traitons les informations sur notre site Web.</p>
                <h3 class="color-white">Cookies</h3>
                <p>Le site Web de Medespoir utilise un service d'analyse Web. Les "cookies" sont des fichiers texte placés sur votre ordinateur, pour aider le site Web à analyser la façon dont les utilisateurs utilisent le site. Les informations générées par le cookie concernant votre utilisation du site web (y compris votre adresse IP) seront transmises et stockées.<br>Ces informations seront utilisées dans le but d'évaluer votre utilisation du site web, de compiler des rapports sur l'activité du site et de fournir d'autres services relatifs à l'activité du site web et à l'utilisation d'Internet.<br>Vous pouvez refuser l'utilisation de cookies en sélectionnant les paramètres appropriés de votre navigateur, mais veuillez noter que si vous faites cela, vous ne pourrez peut-être pas utiliser toutes les fonctionnalités de ce site web. En utilisant ce site web, vous consentez au traitement des données vous concernant de la manière et aux fins décrites ci-dessus.</p>
                <div class="btn_devis mt-4 text-center"><NuxtLink to="#">Devis express</NuxtLink></div>
            </div>
        </section>
        <section class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h3 class="color-blue mt-5">Collecte d'informations</h3>
                    <p class="color-blue">Medespoir recueille des informations personnelles telles que le nom, l'adresse et l'adresse électronique, lorsque vous nous les fournissez sciemment. Nos serveurs Web recueillent automatiquement des informations statistiques sur votre visite, telles que les pages visitées et les navigateurs utilisés pour visiter notre site.<br>Si vous nous contactez, nous pouvons conserver un enregistrement de votre correspondance ou de vos commentaires, y compris des informations personnellement identifiables. Nous utilisons ces informations pour nous aider à fournir un meilleur service au cas où vous nous recontacteriez.</p>
                    <h3 class="color-blue">Tiers</h3>
                    <p class="color-blue">Nous ne vendons pas, ne partageons pas et ne divulguons pas les informations identifiables individuellement obtenues en ligne sur nos visiteurs à quiconque en dehors de Medespoir.</p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default({
    data() {
      return {
        title: 'Mentions Légales'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Mentions Légales' }
        ],
        htmlAttrs: {
            lang: 'fr'
        },
      }
    }
})
</script>