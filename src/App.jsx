import React from 'react'
import  './App.css'
import Heroheadsection from './HeroHeadsection/Heroheadsection'
import Feature from './Feature/Feature'
import FeatureCont1 from './Feature/FeatureCont1'
import FeatureCont2 from './Feature/FeatureCont2'
import FrequencyQues from './Feature/FrequencyQues'
import BlogPage from './BlogPage'
import Footer from './Footer'

const App = () => {
  return (
    <div>
<Heroheadsection></Heroheadsection>
<Feature></Feature>
<FeatureCont1></FeatureCont1>
<FeatureCont2></FeatureCont2>
<FrequencyQues></FrequencyQues>
<BlogPage></BlogPage>
<Footer></Footer>
    </div>
  )
}

export default App