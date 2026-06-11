const chips = document.querySelectorAll('.ingredient');

const observer = new IntersectionObserver( (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
},{ threshold: 0.1 });

chips.forEach(chips => observer.observe(chips));

console.log('connected');