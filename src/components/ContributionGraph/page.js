import React, {useEffect, useState} from 'react';
import axios from 'axios';
//import "@carbon/styles/css/styles.css";
import "@carbon/charts/styles.css";
import { ComboChart, LineChart, } from "@carbon/charts-react";
import { Grid, Column, Tag, Tile } from "@carbon/react";
import { PieChart, PieC } from "@carbon/charts-react";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
//import "./ibm-plex-font.css";
function convertCamelCase(string) {
  const result = string.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
}

const state = {
  data: [
    {
      "group": "Github Commit",
      "date": "2019-12-31T18:30:00.000Z",
      "value": 4
    },
    {
      "group": "Github Commit",
      "date": "2020-12-31T23:30:00.000Z",
      "value": 10
    },
    {
      "group": "Github Commit",
      "date": "2021-01-01T04:30:00.000Z",
      "value": 6
    },
    {
      "group": "Github Commit",
      "date": "2022-01-01T18:30:00.000Z",
      "value": 300
    },
    {
      "group": "Github Commit",
      "date": "2023-01-01T20:30:00.000Z",
      "value": 34
    }

  ],
  options: {
    "title": "Github Contribution Chart",
    "curve": "curveMonotoneX",
    "axes": {
      "left": {
        "mapsTo": "value",
        "title": "Total Contributions",
        "scaleType": "linear"
      },
      "bottom": {
        "title": "Year",
        "mapsTo": "date",
        "scaleType": "time"
      }
    },
    "height": "800px"
  }
};

const ContributionGraph = () => {
  const [gitHubData, updateGitHubData] = useState({data: [], options: {
    "title": "Github Contributions",
    "resizable": true,
    "height": "400px",
    //"width": '400px',
    "legend": {
      "position": "right",
      "alignment": "center",
      "orientation": false
    },
    "pie": {
      "alignment": "center"
    }
  }});

  useEffect(() => {
    console.log('hey');
    const headers = {
      'Authorization': `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    }
    const body = {
      "query": `query {
          user(login: "Shankar-CodeJunkie") {
            name
            contributionsCollection {
              totalPullRequestContributions
              totalIssueContributions
              totalCommitContributions
              totalPullRequestReviewContributions
              contributionCalendar {
                months {
                  name
                  year
                }
                weeks {
                  contributionDays {
                    contributionCount
                    date
                    weekday
                  }
                }
                totalContributions
              }
            }
          }
        }`
    }
    const fetchData = async() => {
      axios({
        method: 'POST',
        url: 'https://api.github.com/graphql',
        data: JSON.stringify(body),
        headers: headers
      })
      .then(response => {
        console.log(response.data.data.user.contributionsCollection);
        //updateGitHubData(response.data.data.user.contributionsCollection)
        // updateGitHubData((prevState) => ({
        //   ...prevState.data,
        //   data: response.data.data.user.contributionsCollection
        // }))
        
        let completeArr = [];
        let gihubObject = response.data.data.user.contributionsCollection;
        for (let key in response.data.data.user.contributionsCollection) {
          console.log('jey', key, response.data.data.user.contributionsCollection[key])
          let wvalue = response.data.data.user.contributionsCollection[key];
          console.log(wvalue)
          let sampleObject = {};
          sampleObject.group = convertCamelCase(key);
          sampleObject.value = wvalue;
          completeArr.push(sampleObject)
        }
       
        updateGitHubData((prevState) => ({
          ...prevState,
          data: completeArr,
        }));
        console.log('w', gitHubData)
      })
      .catch(err => console.log(err))

    }
    fetchData()
    
  }, [])
  
  return (
    <Grid>
      <Column lg={8} md={8} sm={4}>

        <Tile>
          <div className='tile-headerv1'>
            Contributed Organisations

          </div>
          <hr />
          <div className='org'>
            <Grid>
              <Column lg={16} md={8} sm={4}>
                <Tag type={'outline'} size={'md'}>IBM/carbon-design-system</Tag>
              </Column>
              <Column lg={16} md={8} sm={4}>
                <Tag type={'outline'} size={'md'} >Microsoft/VSCode</Tag>
              </Column>
              <Column lg={16} md={8} sm={4}>
                <Tag type={'outline'} size={'md'} >vercel/next.js</Tag>
              </Column>
              <Column lg={16} md={8} sm={4}>
                <Tag type={'outline'} size={'md'} >IBM/VSCode-Cloudant-Explorer</Tag>
              </Column>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Grid>
          </div>
        </Tile>


      </Column>
      <Column lg={8} md={8} sm={4}>
      {
      gitHubData.data && (
        <div>
          
          {/* Other data here */}
          <PieChart
          data={gitHubData.data}
          options={gitHubData.options} />
        </div>
      )}
       
      </Column>
    </Grid>
  )
}

export default ContributionGraph;