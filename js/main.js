const dependencies = ["js/dependencies/jquery-3.5.0.min.js","js/dependencies/styleswitcher.js","js/dependencies/preloader.min.js","js/dependencies/fm.revealator.jquery.min.js","js/dependencies/imagesloaded.pkgd.min.js","js/dependencies/masonry.pkgd.min.js","js/dependencies/classie.js","js/dependencies/cbpGridGallery.js","js/dependencies/jquery.hoverdir.js","js/dependencies/popper.min.js","js/dependencies/bootstrap.js","js/dependencies/custom.js"]

const importDependencies = (files)=>{
    files.forEach((file)=>{
        let script = document.createElement('script');
        script.src = file;
        document.getElementsByTagName('head')[0].appendChild(script);
    });
}

importDependencies(dependencies);