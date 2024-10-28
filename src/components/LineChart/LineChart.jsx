import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    
    const studentMarksData = [
        { id: 1, name: "Student 1", math: 75, physics: 80, chemistry: 70 },
        { id: 2, name: "Student 2", math: 88, physics: 78, chemistry: 85 },
        { id: 3, name: "Student 3", math: 92, physics: 85, chemistry: 90 },
        { id: 4, name: "Student 4", math: 60, physics: 65, chemistry: 58 },
        { id: 5, name: "Student 5", math: 78, physics: 72, chemistry: 80 },
        { id: 6, name: "Student 6", math: 85, physics: 88, chemistry: 82 },
        { id: 7, name: "Student 7", math: 90, physics: 91, chemistry: 87 },
        { id: 8, name: "Student 8", math: 83, physics: 76, chemistry: 79 },
        { id: 9, name: "Student 9", math: 67, physics: 70, chemistry: 68 },
        { id: 10, name: "Student 10", math: 95, physics: 92, chemistry: 94 }
    ];

    return (
        <div className="m-12 space-y-10">
            <h2 className="text-5xl">Students: 10</h2>
            <LChart width={800} height={400} data={studentMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke="#8884d8"></Line>
                <Line dataKey="physics" stroke='red'></Line>
                <Line dataKey="chemistry" stroke='#4d8'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;