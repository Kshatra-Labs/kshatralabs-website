export type Quality = 'low' | 'medium' | 'high';

interface NavigatorWithMemory extends Navigator {
     deviceMemory?: number;
}

export function getGPUBudget(): Quality {
     if (typeof navigator === "undefined") return 'low';

     // Fallback values if properties are missing (common in some browsers/TS configs)
     const cores = navigator.hardwareConcurrency || 4;
     // deviceMemory is experimental but supported in Chrome-based browsers
     const mem = (navigator as NavigatorWithMemory).deviceMemory || 4;

     if (cores >= 8 && mem >= 8) return 'high';
     if (cores >= 6 && mem >= 6) return 'medium';

     return 'low';
}

export function checkSplineCompatibility(): boolean {
     if (typeof navigator === "undefined") return false;

     const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

     const mem = (navigator as NavigatorWithMemory).deviceMemory || 4;
     const cores = navigator.hardwareConcurrency || 4;

     // Strict mobile check: Require >= 8GB RAM for mobile to show Spline
     if (isMobile) {
          return mem >= 8;
     }

     // Desktop check: Require at least 4 threads and > 4GB RAM
     // Most desktops with < 8GB RAM might struggle but we'll be slightly more lenient than mobile
     return cores >= 4 && mem >= 4;
}