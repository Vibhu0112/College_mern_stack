import React from 'react';
import Student from './st';


const root = ReactDom.createRoot(
    document.getElementById("root")
);

root.render(
    <div>
        <Student name="s1" phone="9876543210" m1='60' m2='57' m3='80'/>
    </div>
)
export default index;