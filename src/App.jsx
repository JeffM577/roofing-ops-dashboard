import React from 'react';
import { Badge, Card, ConfigProvider, Layout, Table, Tag, Typography, theme } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { createRoot } from 'react-dom/client';
import './styles.css';

const jobs = [
  { key: 1, job: 'Rivera Residence', phase: 'Material staging', priority: 'High', due: 'Today' },
  { key: 2, job: 'North Office', phase: 'Final inspection', priority: 'Normal', due: 'Tomorrow' },
  { key: 3, job: 'Pine Warehouse', phase: 'Crew scheduled', priority: 'Normal', due: 'Friday' },
];

const columns = [
  { title: 'Job', dataIndex: 'job' },
  { title: 'Phase', dataIndex: 'phase' },
  {
    title: 'Priority',
    dataIndex: 'priority',
    render: (priority) => <Tag color={priority === 'High' ? 'red' : 'blue'}>{priority}</Tag>,
  },
  { title: 'Due', dataIndex: 'due' },
];

function App() {
  return (
    <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
      <Layout className="dashboard-shell">
        <Layout.Content className="dashboard-content">
          <Typography.Title>Roofing Ops Dashboard</Typography.Title>
          <section className="metric-row">
            <Card><Badge status="processing" text="6 active jobs" /></Card>
            <Card><Badge status="warning" text="2 material blockers" /></Card>
            <Card><CalendarOutlined /> 4 scheduled inspections</Card>
          </section>
          <Card title="Today">
            <Table columns={columns} dataSource={jobs} pagination={false} />
          </Card>
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  );
}

createRoot(document.getElementById('root')).render(<App />);
