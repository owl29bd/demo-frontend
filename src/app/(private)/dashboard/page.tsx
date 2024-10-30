import Card3 from "@/components/dashboard/Card3";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-gray-100 dark:bg-gray-950">
        <div className="p-6 grid gap-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card3
              title="Total Revenue"
              value="$45,231.87"
              description="+20.1% from last month"
            />
            <Card3
              title="Subscriptions"
              value="+2350"
              description="+180.1% from last month"
            />
            <Card3
              title="Sales"
              value="+12,234"
              description="+19% from last month"
            />
            <Card3
              title="Active Now"
              value="+573"
              description="+201 since last hour"
            />
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Signups</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Signup Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>john@example.com</TableCell>
                      <TableCell>Free</TableCell>
                      <TableCell>
                        {new Date("2022-12-31").toISOString()}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Doe</TableCell>
                      <TableCell>jane@example.com</TableCell>
                      <TableCell>Pro</TableCell>
                      <TableCell>
                        {new Date("2023-07-13").toISOString()}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>John Smith</TableCell>
                      <TableCell>smith@example.com</TableCell>
                      <TableCell>Pro Plus</TableCell>
                      <TableCell>{new Date().toISOString()}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>john@example.com</TableCell>
                      <TableCell>Free</TableCell>
                      <TableCell>
                        {new Date("2022-12-31").toISOString()}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Doe</TableCell>
                      <TableCell>jane@example.com</TableCell>
                      <TableCell>Pro</TableCell>
                      <TableCell>
                        {new Date("2023-07-13").toISOString()}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>John Smith</TableCell>
                      <TableCell>smith@example.com</TableCell>
                      <TableCell>Pro Plus</TableCell>
                      <TableCell>{new Date().toISOString()}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
