import { URLS } from "../constants/urls.js"

export const getUserStacks = async (user_id) => {
    let result = []

    let route = URLS.base + 'api/users/' + user_id;
    let userResponse = await fetch(route);
    let userData = await userResponse.json();
    let stacksData = userData.user_stacks

    for(let i = 0; i < stacksData.length; i++) {
        route = URLS.base + 'api/stacks/' + stacksData[i];
        let stackResponse = await fetch(route);
        let stackData = await stackResponse.json();
        stackData['streak'] = Math.floor(Math.random() * 10 + 1);

        let habitsData = stackData.stacked_habits;
        
        for(let j = 0; j < habitsData.length; j++) {
            route = URLS.base + 'api/habits/' + habitsData[j];
            let habitResponse = await fetch(route);
            let habitData = await habitResponse.json();

            habitsData[j] = habitData;
        }

        stacksData[i] = stackData;
    }
    return stacksData;
}