import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const CustomHook = (refTab = null, refDivs = null) => {
    const thisTab = refTab;
    const thisDivs = refDivs;
    const activeTab = useSelector(state => state.activeTab);
    useEffect(() => {
        if (thisTab && thisTab.current && thisTab.current.classList.contains(activeTab)) {
            thisTab.current.scrollIntoView({ behavior: 'smooth' });
        }

        if (thisDivs && thisDivs.current) {
            thisDivs.current.forEach((div) => {
                if (div) {
                    div.classList.add('animation');
                }
            });
            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                thisDivs.current.forEach((div) => {
                    if (div) {
                        const offsetTop = div.getBoundingClientRect().top + scrollPosition;
                        if (scrollPosition >= offsetTop - (window.innerHeight / 4 * 3)) {
                            div.classList.add('active');
                        } else {
                            div.classList.remove('active');
                        }
                    }
                });
            };
            window.addEventListener('scroll', handleScroll);
        }
    }, [thisDivs, thisTab, activeTab]);
}

export default CustomHook