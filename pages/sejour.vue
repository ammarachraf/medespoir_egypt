<template>
    <div class="__pages">
        <div class="top__title abdo">
            <div class="containerXD">
                <div class="row">
                    <div class="col-lg-5 col-md-5 col-12 display-flex">
                        <div class="width-60 text-center">
                            <h1>Détails sur votre séjour en Egypte</h1>
                            <div class="btn_devis mt-4"><NuxtLink to="#">Devis express</NuxtLink></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="container">
            <div class="row">
                <div class="col-md-5 col-12"><img src="@/assets/img/img4-obesite.jpg" alt="Medespoir maroc"></div>
                <div class="col-md-7 col-12 mt-5">
                    <p class="color-blue">Medespoir, leader en tourisme médical, s’occupe de vous organiser un séjour médical de haute qualité. Un séjour organisé avec méthodologie et ordre pour réussir votre intervention et passer d’agréables moments.</p>
                    <h2 class="yellow">Quelles sont les étapes de votre séjour esthétique en Egypte ?</h2>
                    <p>Quand vous décidez de faire une intervention de chirurgie esthétique en Egypte, vous aurez l’esprit tranquille grâce au professionnalisme reconnu de Medespoir.<br>Vous trouverez ci-dessous les étapes de votre séjour en Egypte :</p>
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
                <h3 class="color-white">Accueil</h3>
                <p>Dès que votre avion atterrisse, vous trouverez un assistant médical à votre accueil qui s’occupera de vous accompagner tout au long de votre séjour. C’est d’ailleurs la même personne qui s’occupe de votre dossier médical.</p>
                <h3 class="color-white">Transport</h3>
                <p>Un chauffeur, à bord d‘une voiture climatisée, se chargera de vous raccompagner soit à l’hôtel soit à la clinique. Cela dépend de vos rendez-vous avec le chirurgien. Sur la route, vous pouvez soit écouter de la musique, profiter du paysage dans le silence. Notre personnel est parfaitement formé pour respecter vos choix et répondra à vos interrogations.</p>
                <h3 class="color-white">Entretien préopératoire avec le chirurgien et le médecin anesthésiste</h3>
                <p>Une discussion approfondie avec le médecin anesthésiste sera faite pour décider du type d’anesthésie. Une visite auprès de votre chirurgien plasticien sera nécessaire pour un entretien face à face pour les mises au point nécessaires et pour répondre à vos interrogations.</p>
                <h3 class="color-white">Veiller sur votre confort</h3>
                <p>Une fois arrivé à la clinique, votre assistante médicale Medespoir ne part qu’après s’être assuré que vous êtes bien installé. A la fin de votre entretien préopératoire, elle vous accompagnera à l’hôtel de luxe pour vous installer et profiter d’une bonne nuit de repos.</p>
                <h3 class="color-white">Se charger de la partie administrative</h3>
                <p>Votre assistante a aussi pour tâche de vous aider à remplir les formulaires et de régler toute la paperasse de la facturation aussi bien de la clinique que de l’hôtel.</p>
                <h3 class="color-white">Garanti d’une qualité de soins et de sécurité</h3>
                <p class="mt-3">Grâce à des blocs opératoires d’une qualité égale à celle des cliniques européennes, les patients sont assurés de percevoir des soins d’excellente qualité. Les cliniques égyptiennes disposent de matériel dernier cri, neuf et ultra perfectionné pour mener à bien les interventions de chirurgie esthétique.<br>En plus des salles d’opérations et celles du réveil, vous pouvez compter sur le professionnalisme des chirurgiens et de tout le staff médical pour un séjour en Egypte réussi.</p>
                <h3 class="color-white">Visite post opératoire</h3>
                <p>Votre chirurgien passera vous voir pour vérifier que tout s’est bien passé. Il vous communique les consignes et les recommandations et vous prescrit les médicaments à prendre. Pour les soins ultérieurs, un infirmier passera pour changer les pansements.</p>
                <div class="btn_devis mt-4 text-center"><NuxtLink to="#">Devis express</NuxtLink></div>
            </div>
        </section>
        <section class="container">
            <div class="row">
                <div class="col-md-5 col-12"><img src="@/assets/img/img6-obesite.jpg" alt="Medespoir maroc"></div>
                <div class="col-md-7 col-12">
                    <h3 class="color-blue mt-5">Assistance et réconfort après votre intervention</h3>
                    <p>A la sortie de la salle d’opération, le personnel de la clinique s’occupe de vous à votre réveil de l’anesthésie. L’agent médical vous aidera en cas de besoin et vous accompagnera à l’hôtel le lendemain de votre opération. Il sera à votre disposition pour toute réclamation, pour vous accompagner pour les visites post opératoires. Le même assistant-chauffeur qui vous a accueilli se chargera de vous déposer à l’aéroport.</p>
                    <h3 class="color-blue mt-2">Assistance téléphonique après l’opération</h3>
                    <p>Une fois rentré, vous pouvez toujours contacter l’équipe de Medespoir pour toutes vos questions et vous donner les renseignements sur les médecins partenaires.<br>N’hésitez pas à contacter l’équipe de Medespoir en Egypte pour bénéficier d’un séjour médical d’excellente qualité.</p>

                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default({
    data() {
      return {
        title: 'Détails sur votre séjour en Egypte'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Détails sur votre séjour en Egypte' }
        ],
        htmlAttrs: {
            lang: 'fr'
        },
      }
    }
})
</script>