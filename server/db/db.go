package db

import (
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	"github.com/YuyaYoshioka/bookshelf-app/server/entity"

)

var (
	db *gorm.DB
	err error
)

const (
	Dialect = "mysql"
	DBUser = "root"
	DBPass = ""
	DBProtocol = "tcp(127.0.0.1:3306)"
	DBName = "bookshelf_app"
)

func AutoMigration() {
	db.AutoMigrate(&entity.User{})
}

func DBOpen() *gorm.DB{
	connectTemplate := "%s:%s@%s/%s"
	connect := fmt.Sprintf(connectTemplate, DBUser, DBPass, DBProtocol, DBName)
	db, err := gorm.Open(Dialect, connect + "?parseTime=true")
	if err != nil {
		panic(err)
	}
	return db
}

func Init() {
	db = DBOpen()
	AutoMigration()
}

func GetDB() *gorm.DB{
	return db
}

func Close() {
	if err := db.Close(); err != nil {
		panic(err)
	}
}
