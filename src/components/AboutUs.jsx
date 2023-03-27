import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import 'animate.css';
import bg from "../assets/bg5.png"
import TrackVisibility from 'react-on-screen';
import "./css/AboutUs.css"
import { SectionWrapper } from "../hoc";
const AboutUs = () => {

  const [currentTab, setCurrentTab] = useState('1');
  const tabs = [      {          id: 1,          tabTitle: 'TED',   
         title: '',       
         content: "TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has\
         grown to support its mission with multiple initiatives. The two annual\
         TED Conferences invite the world's leading thinkers and doers to speak\
         for 18 minutes or less. Many of these talks are then made available,\
         free, at TED.com. TED speakers have included Bill Gates, Jane Goodall,\
         Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe\
         Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.\
          The annual TED Conference takes place each spring in Vancouver\
         British Columbia. TED's media initiatives include TED.com, where new\
         TED Talks are posted daily; the Open Translation Project, which\
         provides subtitles and interactive transcripts as well as translations\
         from volunteers worldwide; the educational initiative TED-Ed. TED has\
         established the annual TED Prize, where exceptional individuals with a\
         wish to change the world get help translating their wishes into\
         action; TEDx, which supports individuals or groups in hosting local,\
         self- organized TED-style events around the world, and the TED Fellows\
         program, helping world-changing innovators from around the globe to\
         amplify the impact of their remarkable projects and activities."  },  
      {          id: 2,          tabTitle: 'TEDX',          title: '',
                content:  " In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. TEDx is an independently organized event that follows the structure of the popular TED Talks.\
                 TEDx events are organized  by volunteers in local communities around the world, with the aim of spreading ideas and sparking conversations on a range of topics. \
                At a TEDx event, TED Talks video and live speakers combine\
                to spark deep discussion and connection. These local, self-organized\
                events are branded TEDx, where x = independently organized TED event.\
                The TED Conference provides general guidance for the TEDx program, but\
                individual TEDx events are self-organized.TEDx events can take many different forms, from large conferences with hundreds of\
                attendees to smaller, more intimate gatherings. They may be held in theaters, community \
                centers, or even outdoors, and often feature a combination of live speakers and pre-recorded TED Talks.\
       One of the unique features of TEDx events is the emphasis on fostering\
        community and conversation around the ideas presented. Attendees are encouraged \
        to interact with each other and with the speakers, sharing their own perspectives and engaging\
         in thoughtful dialogue.TEDx is a powerful platform for sharing ideas and inspiring change at the local level. \
               By bringing together diverse voices and perspectives, TEDx events help to foster a deeper\
                understanding of the complex issues facing our world today, and inspire individuals to take action \
                towards positive change"
            },     
       {          id: 3,          tabTitle: 'IIITV',          title: '', 
                content: " Indian Institute of Information Technology (IIIT) Vadodara is a premier institute of higher education located in the city of Vadodara \
                in Gujarat, India. The institute was established in 2013 under the Public-Private Partnership (PPP) model, with the Government\
                 of India, the Government of Gujarat, and industry partners as stakeholders.IIIT Vadodara offers undergraduate and graduate\
                  degree programs in the fields of Computer Science and Information Technology. \
                 The institute is known for its rigorous academic programs, \
                  world-class faculty, and state-of-the-art facilities.IIIT Vadodara has a strong focus on research, with several research centers and \
                  dedicated to cutting-edge research in areas such as data science, artificial intelligence, and cybersecurity. The institute has collaborations\
                   with several leading academic and research institutions in India and abroad, and its faculty and students are actively engaged in research projects\
                    of national and international significance. In addition to its academic and research programs, IIIT Vadodara is also known for its vibrant campus life. The institute has a range of clubs and student organizations, including a coding club, a robotics club, and a music club, among others. The campus also has several sports facilities, including a football ground, a basketball court, and a gymnasium.\
IIIT Vadodara is committed to providing its students with a well-rounded education that prepares them for successful careers in the rapidly evolving field of information technology. With its world-class faculty, cutting-edge research facilities, and vibrant campus life, IIIT Vadodara is a top choice for students seeking a career in IT in India."      }  ];

  const handleTabClick = (e) => {
      setCurrentTab(e.target.id);
  }

  const projects = [];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "TED ", "TEDX ", "IIITV " ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
   
    <section className="project" id="project" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' ,backgroundRepeat:'no-repeat',backgroundAttachment:'fixed',height:'100vh',width:'auto' }}>
      <center>
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
               <h2 style={{ marginBottom: '50px', marginTop: '0px', color: "red"}}>{`About`} <span className="txt-rotate" style={{color: "white"} } dataPeriod="1000" data-rotate='[ "Ted ", "TedX ", "IIITV " ]'><span className="wrap">{text}</span></span></h2>
               <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><p className='cs'>{tab.content}</p></div>}
                    </div>
                )}
            </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      </center>
       </section>
     
  )

}
export default SectionWrapper(AboutUs, "aboutUs");
