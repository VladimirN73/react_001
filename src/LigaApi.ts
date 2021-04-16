
interface ApiResult {

}

export async function loadDataApi(day: number) {
    const url = `https://www.openligadb.de/api/getmatchdata/bl1/2017/${day}`;

    const response = await fetch(url);
    const result = await response.json();

    return result;
}