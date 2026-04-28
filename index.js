// server.js (Express)
const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
app.use(cors());

// 菜单数据结构与 antd Menu 的 MenuItem 类型匹配
const menuItems = [
  { key: "1", icon: "PieChartOutlined", label: "个人主页" },
  { key: "2", icon: "DesktopOutlined", label: "技能展示" },
  { key: "3", icon: "ContainerOutlined", label: "Option 3" },
  {
    key: "sub1",
    label: "Navigation One",
    icon: "MailOutlined",
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      { key: "7", label: "Option 7" },
      { key: "8", label: "Option 8" },
    ],
  },
  // ... 其他菜单项
];

app.get("/api/menu", (req, res) => {
  console.log(req.headers.host, "host laiyuan");
  res.json(menuItems);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
