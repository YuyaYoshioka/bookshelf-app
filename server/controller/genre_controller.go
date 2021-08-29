package controllers

import (
	"fmt"

	"github.com/YuyaYoshioka/bookshelf-app/server/service"
	"github.com/gin-gonic/gin"
)

type GenreController struct {}

func (pc GenreController) Create(c *gin.Context) {
	var service services.GenreService
	genre, err := service.CreateModel(c)

	if err != nil {
		fmt.Println(err)
	} else {
		c.JSON(201, genre)
	}
}
