/**
 * Created by linfaxin on 15/10/5.
 */
///<reference path="../../util/DisplayMetrics.ts"/>
module android.content.res{
    import DisplayMetrics = android.util.DisplayMetrics;

    export class Resources{
        private static displayMetrics;
        private static density = 1;

        //FIXME not static, may about to one context
        static getDisplayMetrics():DisplayMetrics {
            if(Resources.displayMetrics) return Resources.displayMetrics;
            Resources.displayMetrics = new DisplayMetrics();
            let displayMetrics = Resources.displayMetrics;

            displayMetrics.widthPixels = window.innerWidth;//FIXME view root height
            displayMetrics.heightPixels = window.innerHeight;
            displayMetrics.xdpi = window.screen.deviceXDPI || DisplayMetrics.DENSITY_DEFAULT ;
            displayMetrics.ydpi = window.screen.deviceYDPI || DisplayMetrics.DENSITY_DEFAULT;
            displayMetrics.density = Resources.density;//window.devicePixelRatio;
            displayMetrics.densityDpi = displayMetrics.density * DisplayMetrics.DENSITY_DEFAULT;
            displayMetrics.scaledDensity = displayMetrics.density;

            return displayMetrics;
        }

        static setDensity(density:number):void{
            Resources.density = density;
            Resources.displayMetrics = null;
        }
    }
}