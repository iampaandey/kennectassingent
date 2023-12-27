
import MyProfile from "@components/MyProfile";
import TextBox from "@components/TextBox";

export const metadata = {
  title: 'Hey OG Blogger',
  description: 'EK BaarI AA Bhi Jaa Yaara ! Zindagi Narak Bana JAa Dobara!',
}

export default function Home() {
 
  return (
    <div className="even-main">
       <div className="main-home">
      <MyProfile/>
     </div>
    </div>
    
  )
}
