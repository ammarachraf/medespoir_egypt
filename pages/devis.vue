<template>
    <div class="__pages">
        <div class="top__title abdo">
            <div class="containerXD">
                <div class="row">
                    <div class="col-lg-5 col-md-5 col-12 display-flex">
                        <div class="width-60 text-center">
                            <h1>Devis gratuit</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="container">
            
        </section>
    </div>
</template>
<script>
    export default({
    data() {
      return {
        title: 'Devis'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Devis' }
        ],
        htmlAttrs: {
            lang: 'fr'
        },
      }
    }
})
</script>