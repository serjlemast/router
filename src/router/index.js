import VueRouter from 'vue-router'

import images from "../pages/images"
import info from "../pages/info"
import uploadImages from "../pages/uploadImages"
import layout from "../pages/layout"

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: layout,
            children: [
                {
                    path: 'images',
                    name: 'images',
                    component: images,
                },
                {
                    path: 'upload',
                    name: 'upload',
                    component: uploadImages,
                },
                {
                    path: 'info',
                    name: 'info',
                    component: info,
                }

            ]
        }

    ]
})
