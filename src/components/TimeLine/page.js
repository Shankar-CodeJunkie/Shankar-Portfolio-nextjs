import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Enterprise} from  '@carbon/react/icons';
import './_timeline.scss';
import './../../../node_modules/react-vertical-timeline-component/style.min.css'

const Timeline = () => {
  return (
    <VerticalTimeline lineColor={'black'}>
          <VerticalTimelineElement
              className="vertical-timeline-element--work TileBody"
              //contentStyle={{ background: 'linear-gradient(134deg, rgb(5, 64, 200) 0%, rgb(138, 63, 252) 100%)', color: '#fff' }}
              contentStyle={{ background: 'var(--cds-layer)', color: 'var(--cds-text-primary)', borderLeft: '5px solid #fa4d56'}}
              contentArrowStyle={{ borderRight: '7px solid  #fa4d56' }}
              date="2019 - present"
              iconStyle={{ background: '#fa4d56', color: '#fff' }}
              icon={<Enterprise />}
              visible={true}
          >
             <h3 className="vertical-timeline-element-title">Fullstack Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">IBM</h4>
                <h6>2019 - present</h6>
                <div className={'roles'} >
                  <ul>
                    <li>
                      Co-created a React based profile UI for external users in www.ibm.com.
                    </li>
                    <li style={{paddingTop: '1vh'}}>
                      Created 3 slack bots to automate some of the manual tasks that we had to do every day in our team.
                    </li>
                    <li style={{paddingTop: '1vh'}}>
                      Created and Managing 5-6 enterprise web applications on IBM Cloud running on multi-region Kubernetes cluster
                    </li>

                  </ul>
                </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work TileBody"
              contentStyle={{ background: 'var(--cds-layer)', color: 'var(--cds-text-primary)', borderLeft: '5px solid #fa4d56'}}
              contentArrowStyle={{ borderRight: '10px solid  #fa4d56' }}
              date="2014 - 2019"
              iconStyle={{ background: '#fa4d56', color: '#fff' }}
              icon={<Enterprise />}
              visible={true}
          >
            <h3 className="vertical-timeline-element-title">Staff Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">IBM</h4>
                <h6>2014 - 2019</h6>
                <div className={'roles'} >
                  <ul>
                    <li>
                      L3 Support Software Engineer for Lotus Domino servers and  Lotus Notes Client
                    </li>
                    <li style={{paddingTop: '1vh'}}>
                      Handle PMR's from worldwide Clients and also assist escalations from L2 support teams
                    </li>

                  </ul>
                </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work TileBody"
              contentStyle={{ background: 'var(--cds-layer)', color: 'var(--cds-text-primary)', borderLeft: '5px solid #fa4d56'}}
              contentArrowStyle={{ borderRight: '7px solid  #fa4d56' }}
              date="2009 - 2014"
              iconStyle={{ background: '#fa4d56', color: '#fff' }}
              icon={<Enterprise />}
              visible={true}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">IBM</h4>
              <h6>2009 - 2014</h6>
              <div className={'roles'} >
                <ul>
                  <li>
                    L2 Support Software Engineer for Lotus Domino servers and  Lotus Notes Client
                  </li>
                  <li style={{paddingTop: '1vh'}}>
                    Handle PMR's from worldwide Clients for Crash, Hang and Performance issues on Lotus Domino Servers.
                  </li>

                </ul>
              </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work TileBody"
              contentStyle={{ background: 'var(--cds-layer)', color: 'var(--cds-text-primary)', borderLeft: '5px solid #fa4d56' }}
              contentArrowStyle={{ borderRight: '10px solid  #fa4d56' }}
              date="2007 - 2009"
              iconStyle={{ background: '#fa4d56', color: '#fff' }}
              icon={<Enterprise />}
              visible={true}
          >
            <h3 className="vertical-timeline-element-title">System Administrator</h3>
              <h4 className="vertical-timeline-element-subtitle">IBM</h4>
              <h6>2007 - 2009</h6>
              <div className={'roles'} >
                <ul>
                  <li>
                    Manage around 100 domino servers running on Windows and UNIX platforms
                  </li>
                  <li style={{paddingTop: '1vh'}}>
                    Work on Lotus Notes Client and Server related problems
                  </li>

                </ul>
              </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
  )
}

export default  Timeline;
