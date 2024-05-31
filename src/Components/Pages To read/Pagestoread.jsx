import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getStoredReadBooksApplication } from '../utility/Utility';
import { useLoaderData } from 'react-router-dom';

const Pagestoread = () => {
    const books = useLoaderData();
    const [data, setData] = useState([]);
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    useEffect(() => {
        const storedId = getStoredReadBooksApplication();
        if (books.length > 0) {
            const booksWish = [];
            for (const id of storedId) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    booksWish.push(book);
                }
            }
            const formattedData = booksWish.map((book, index) => ({
                name: book.bookName,
                uv: book.totalPages,
                fill: colors[index % colors.length],
            }));
            setData(formattedData);
        }
    }, [books]);
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

    return (
        <div style={{ width: '100%', height: 500 }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" label={{ position: 'top' }} shape={<TriangleBar />}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Pagestoread;
