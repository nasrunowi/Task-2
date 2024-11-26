import React from "react";
import TableGeneric from "../components/TableGeneric";
import TableOld, { ColumnDefs as OldColumnDefs } from "../components/TableOld";

const App = () => {
    // Data dan kolom untuk Tabel Sebelumnya
    const oldColumnDefs: OldColumnDefs[] = [
        { title: "ID", field: "id" },
        { title: "Name", field: "name" },
        { title: "Email", render: (row) => <a href={`mailto:${row.email}`}>{row.email}</a> },
    ];

    const oldData = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Doe", email: "jane@example.com" },
    ];

    // Data dan kolom untuk Tabel Generic
    type User = {
        id: number;
        name: string;
        email: string;
    };

    const genericColumnDefs = [
        { title: "ID", field: "id" },
        { title: "Name", field: "name" },
        { title: "Email", render: (row: User) => <a href={`mailto:${row.email}`}>{row.email}</a> },
    ];

    const genericData: User[] = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Doe", email: "jane@example.com" },
    ];

    return (
        <div className="p-4 space-y-8">
            <h1 className="text-2xl font-bold">Tabel Sebelumnya</h1>
            <TableOld columnDefs={oldColumnDefs} data={oldData} />

            <h1 className="text-2xl font-bold">Tabel Generic</h1>
            <TableGeneric<User> columnDefs={genericColumnDefs} data={genericData} />
        </div>
    );
};

export default App;
