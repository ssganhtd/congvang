export default defineNuxtRouteMiddleware((to, from) => {
    const route = useRoute()
    if (route.query.fbclid != undefined) {
                return navigateTo('https://congvangvietnam.com/' + route.params.slug, { external: true })
            }
})