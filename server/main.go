package main

import (
	"github.com/YuyaYoshioka/bookshelf-app/server/db"
	"github.com/YuyaYoshioka/bookshelf-app/server/server"
)

func main() {
	db.Init()
	server.Init()
	defer db.Close()
}
