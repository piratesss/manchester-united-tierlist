import { promises as fs } from 'fs';

import TierList from '@/app/TierList';

async function getData() {
    const file = await fs.readFile(process.cwd() + '/app/data/tierList.json', 'utf8');

    return JSON.parse(file);
}

const Home = async () => {
    const data = await getData();

    return <TierList data={data} />;
};

export default Home;
