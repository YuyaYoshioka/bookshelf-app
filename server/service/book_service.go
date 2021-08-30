package services

import (
	"github.com/gin-gonic/gin"
	"github.com/YuyaYoshioka/bookshelf-app/server/db"
	"github.com/YuyaYoshioka/bookshelf-app/server/entity"
)

type BookService struct{}

type Book entity.Book

func (s BookService) CreateModel(c *gin.Context) (Book, error) {
	db := db.GetDB()
	var book Book

	if err := c.BindJSON(&book); err != nil {
		return book, err
	}

	if err := db.Create(&book).Error; err != nil {
		return book, err
	}

	return book, nil
}
