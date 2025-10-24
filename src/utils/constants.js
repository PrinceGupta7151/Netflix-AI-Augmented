export const LOGO = 
"https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://avatars.githubusercontent.com/u/143149467?v=4";


export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    // Build Authorization header at runtime to make it clearer when key is missing
    Authorization:
      process.env.REACT_APP_TMDB_KEY && process.env.REACT_APP_TMDB_KEY.length > 0
        ? 'Bearer ' + process.env.REACT_APP_TMDB_KEY
        : '',
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780/";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_medium.jpg"


export const SUPPORTED_LANGUAGES = [
  {identifier:"en" , name:"English"},
  {identifier:"hindi", name:"Hindi"},
  {identifier:"spanish", name:"Spanish"}
];

