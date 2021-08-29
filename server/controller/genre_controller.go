package controllers

import (
	"github.com/YuyaYoshioka/bookshelf-app/server/service"
	"github.com/gin-gonic/gin"
)

type GenreController struct {}

func (pc GenreController) Create(c *gin.Context) {
	var service services.GenreService
	genre, err := service.CreateModel(c)

	if err != nil {
		c.AbortWithStatus(404)
	} else {
		c.JSON(201, genre)
	}
}

func (pc GenreController) Index(c *gin.Context) {
	var service services.GenreService
	genres, err := service.GetAll(c)

	if err != nil {
		c.AbortWithStatus(404)
	} else {
		c.JSON(201, genres)
	}
}
