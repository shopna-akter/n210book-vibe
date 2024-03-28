import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
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
            // Assuming booksWish contains data for the chart
            // Format the data appropriately
            const formattedData = booksWish.map((book, index) => ({
                name: book.bookName,
                uv: book.totalPages, // Change this to the actual value you want to display
                fill: colors[index % colors.length], // Assigning color
            }));
            setData(formattedData);
        }
    }, [books]);

    return (
        <div>
            <BarChart
                width={500}
                height={300}
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
                <Bar dataKey="uv" label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default Pagestoread;
