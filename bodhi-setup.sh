#!/bin/bash

echo "== 更新套件列表與系統 =="
sudo apt update && sudo apt upgrade -y

echo "== 安裝 Git =="
sudo apt install -y git

echo "== 安裝 WireGuard =="
sudo apt install -y wireguard

echo "== 安裝 SSH Server =="
sudo apt install -y openssh-server
sudo systemctl enable ssh
sudo systemctl start ssh

echo "== 安裝 TightVNC Server（可選） =="
sudo apt install -y tightvncserver

echo "== 所有套件安裝完成！=="
echo "請使用 ifconfig 或 ip a 查看本機 IP"
echo "Windows 使用者可透過 PuTTY (SSH) 或 VNC Viewer 登入"

