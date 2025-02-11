import React, { useRef, useState } from 'react'
import CustomHook from './CustomHook';

const Contacts = () => {
  const [listContacts] = useState([
    {
      image: (
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" width="35px" height="35px" fill-rule="nonzero">
          <g fill="#ffffff" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10">
            <g transform="scale(5.12,5.12)">
              <path d="M14,3.99023c-5.51133,0 -10,4.48867 -10,10v22c0,5.51133 4.48867,10 10,10h22c5.51133,0 10,-4.48867 10,-10v-22c0,-5.51133 -4.48867,-10 -10,-10zM18.00586,12.0332c0.628,0.027 1.20473,0.38083 1.55273,0.92383c0.396,0.618 1.01055,1.57712 1.81055,2.82813c0.73,1.141 0.78091,2.61469 0.12891,3.80469l-1.46484,2.08398c-0.396,0.564 -0.47498,1.28588 -0.20898,1.92188c0.414,0.99 1.21658,2.5115 2.64258,3.9375c1.426,1.426 2.9475,2.22858 3.9375,2.64258c0.636,0.266 1.35788,0.18702 1.92188,-0.20898l2.08398,-1.46484c1.19,-0.652 2.66369,-0.60009 3.80469,0.12891c1.251,0.8 2.21012,1.41455 2.82813,1.81055c0.543,0.348 0.89683,0.92473 0.92383,1.55273c0.154,3.564 -2.60716,5.00781 -3.41016,5.00781c-0.556,0 -7.2403,0.7597 -14.7793,-6.7793c-7.539,-7.539 -6.7793,-14.2233 -6.7793,-14.7793c0,-0.803 1.44381,-3.56416 5.00781,-3.41016z"></path>
            </g>
          </g>
        </svg>
      ),
      title: 'Phone Number',
      value: '+11 99502-1758'
    },
    {
      image: (<svg width="30" height="30" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="60" fill="white"/>
        <path d="M41.6364 203.028H73.4545V125.755L28 91.6646V189.392C28 196.937 34.1136 203.028 41.6364 203.028Z" fill="#4285F4"/>
        <path d="M182.545 203.028H214.364C221.909 203.028 228 196.915 228 189.392V91.6646L182.545 125.755" fill="#34A853"/>
        <path d="M182.545 66.6643V125.755L228 91.6643V73.4825C228 56.6189 208.75 47.0052 195.273 57.1189" fill="#FBBC04"/>
        <path d="M73.4545 125.755V66.6646L128 107.574L182.545 66.6646V125.755L128 166.665" fill="#EA4335"/>
        <path d="M28 73.4825V91.6643L73.4545 125.755V66.6643L60.7273 57.1189C47.2273 47.0052 28 56.6189 28 73.4825Z" fill="#C5221F"/>
        </svg>),
      title: 'Email',
      value: 'matheusramossilva2003@gmail.com'
    },
    {
      image: <a href='https://www.linkedin.com/in/matheus-ra'><svg width="30" height="30" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="60" fill="white"/>
      <rect width="256" height="256" rx="60" fill="#0A66C2"/>
      <path d="M184.715 217.685H213.985C216.194 217.685 217.985 215.895 217.985 213.686L218 151.844C218 119.521 211.035 94.6755 173.262 94.6755C158.903 94.1423 145.362 101.544 138.055 113.904C137.997 114.002 137.893 114.062 137.779 114.062C137.603 114.062 137.46 113.919 137.46 113.743V101.66C137.46 99.4511 135.67 97.6602 133.46 97.6602H105.683C103.474 97.6602 101.683 99.4511 101.683 101.66V213.68C101.683 215.89 103.474 217.68 105.683 217.68H134.951C137.16 217.68 138.951 215.89 138.951 213.68V158.307C138.951 142.65 141.921 127.487 161.332 127.487C180.467 127.487 180.715 145.403 180.715 159.321V213.685C180.715 215.894 182.506 217.685 184.715 217.685Z" fill="white"/>
      <path d="M38 59.6275C38 71.4921 47.7675 81.2539 59.6321 81.2539C71.4944 81.2528 81.2551 71.4853 81.2551 59.623C81.2528 47.7607 71.491 38 59.6275 38C47.763 38 38 47.763 38 59.6275Z" fill="white"/>
      <path d="M44.9588 217.685H74.2659C76.4751 217.685 78.2659 215.894 78.2659 213.685V101.66C78.2659 99.4511 76.4751 97.6602 74.2659 97.6602H44.9588C42.7497 97.6602 40.9588 99.4511 40.9588 101.66V213.685C40.9588 215.894 42.7497 217.685 44.9588 217.685Z" fill="white"/>
      </svg></a>,
      title: <a href='https://www.linkedin.com/in/matheus-ra'>Linkedin</a>,
      value: ''
    }
  ]);
  const refTab = useRef(null);
  const divs = useRef([]);
  CustomHook(refTab, divs);
  return (
    <section className='contacts' ref={refTab}>
      <div className='title' ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
      </div>
      <div className='des' ref={(el) => el && divs.current.push(el)}>
        Me chame ou mande uma mensagem pelos seguintes meios de contato.</div>
      <div className='list' ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <a key={key} className='item'>
              {value.image}
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </a>
          ))
        }
      </div>
    </section >
  )
}

export default Contacts