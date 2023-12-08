import { NextRequest, NextResponse } from "next/server";


export async function GET(request, response) {

    let data = await getContributions('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', 'Shankar-CodeJunkie');



}

async function getContributions(token, username) {
    const headers = {
        'Authorization': `bearer ${token}`,
    }
    const body = {
        "query": `query {
            user(login: "${username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                }
              }
            }
          }`
    }
    const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
    const data = await response.json()
    return data
}