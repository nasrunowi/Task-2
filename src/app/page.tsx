import React from "react";
import TableGeneric from "../components/TableGeneric";
import TableOld, { ColumnDefs as OldColumnDefs } from "../components/TableOld";
import { employees } from "@/data/employee";

export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-8 bg-slate-50 min-h-screen py-8">
      
      {/* Tabel Sebelumnya */}
      <section className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Tabel Sebelumnya</h1>
        <TableOld 
          columnDefs={[
            {
              title: "Name",
              render: (rowData) => `${rowData.firstName} ${rowData.lastName}`
            },
            {
              title: "Age",
              field: "age"
            },
            {
              title: "Email",
              render: (rowData) => <a href={`mailto:${rowData.email}`}>{rowData.email}</a>
            },
            {
              title: "Phone",
              field: "phone"
            }
          ] as OldColumnDefs[]}
          data={employees}
        />
      </section>

      {/* Tabel Generic */}
      <section className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Tabel Generic</h1>
        <TableGeneric 
          columnDefs={[
            {
              title: "Name",
              render: (rowData) => `${rowData.firstName} ${rowData.lastName}`
            },
            {
              title: "Age",
              field: "age"
            },
            {
              title: "Email",
              render: (rowData) => <a href={`mailto:${rowData.email}`}>{rowData.email}</a>
            },
            {
              title: "Phone",
              field: "phone"
            }
          ]}
          data={employees}
        />
      </section>

    </main>
  );
}
