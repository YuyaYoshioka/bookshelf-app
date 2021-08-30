package controllers

import (
	"github.com/YuyaYoshioka/bookshelf-app/server/service"
	"github.com/gin-gonic/gin"
)

type BookController struct {}

func (pc BookController) Create(c *gin.Context) {
	var service services.BookService
	book, err := service.CreateModel(c)

	if err != nil {
		c.AbortWithStatus(400)
	} else {
		c.JSON(201, book)
	}
}
