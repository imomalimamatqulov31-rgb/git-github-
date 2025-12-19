function animateElement(element, animationName, duration = 1000) {
    return new Promise((resolve, reject) => {
        if (!element) {
            reject(new Error("Element not found"));
            return;
        }   

        element.style.animationName = animationName;
        element.style.animationDuration = `${duration}ms`;
        element.style.animationFillMode = 'forwards';    

        element.addEventListener('animationend', () => {
            resolve();      


        }, { once: true });
        })}