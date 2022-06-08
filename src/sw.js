import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

// default fn export receiving some useful params
export default function swCustom(params) {
    const {
        debug, // :boolean
        offlineMode, // :boolean
    } = params;

    // Cache responses from external resources
    registerRoute(
        (context) => {
            const res = [
                /graph\.facebook\.com\/.*\/picture/,
                /netlify\.com\/img/,
                /avatars1\.githubusercontent/,
                /dog\.glb/,
                /assets\/js\/.*/,
                /img\/.*/,
                /assets\/css\/.*/,
            ].some((regex) => context.url.href.match(regex))

            console.log(res)

            return res
        },
        new StaleWhileRevalidate(),
    );
}