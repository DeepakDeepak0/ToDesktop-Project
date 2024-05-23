const navDialog = document.querySelector("#nav-dialog")

function handleMenu(){
    navDialog.classList.toggle('hidden')
}

const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;


function setupIntersectionObserver(element,isLTR,speed){
    const intersectionCallback =(entries)=>{
        const IsIntersecting = entries[0].isIntersecting;
        if(IsIntersecting){
            document.addEventListener('scroll',scrollHandler);
        }
        else{
            document.removeEventListener('scroll',scrollHandler);
        }
    }

    const Observer = new IntersectionObserver(intersectionCallback)
    Observer.observe(element);

    function scrollHandler(){
        const translateX = (window.innerHeight - element.getBoundingClientRect().top)*speed;
        let totalTranslate = 0;
        if(isLTR){
            totalTranslate = translateX + initialTranslateLTR;
        }
        else{
            totalTranslate = -(translateX + initialTranslateRTL);
        }
        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}

const Line1 = document.getElementById('line-1')
const Line2 = document.getElementById('line-2')
const Line3 = document.getElementById('line-3')
const Line4 = document.getElementById('line-4')


setupIntersectionObserver(Line1,true,0.15)
setupIntersectionObserver(Line2,false,0.25)
setupIntersectionObserver(Line3,true,0.15)
setupIntersectionObserver(Line4,false,0.8)



const dtElements = document.querySelectorAll('dt');
dtElements.forEach((element)=>{
    element.addEventListener('click',()=>{
        const ddId = element.getAttribute('aria-controls');
        const description = document.getElementById(ddId);
        const icon = element.querySelector('i');
        description.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    })
})