import React from 'react';
import Header from "../components/header";

function HomePage() {
    const data = [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Alice', age: 30 },
        { id: 3, name: 'Bob', age: 28 },
        { id: 4, name: 'Eve', age: 35 }
    ];
    return (
        <>  <Header />
            <h1>HomePage</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default HomePage;
