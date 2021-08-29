package controllers

import (
	"github.com/YuyaYoshioka/bookshelf-app/server/service"
	"github.com/gin-gonic/gin"
)

type UserController struct {}

func (pc UserController) Create(c *gin.Context) {
	var service services.UserService
	user, err := service.CreateModel(c)

	if err != nil {
		c.AbortWithStatus(400)
	} else {
		c.JSON(201, user)
	}
}

func (pc UserController) Show(c *gin.Context) {
	id := c.Params.ByName("id")
	var service services.UserService
	user, err := service.GetById(id)

	if err != nil {
		c.AbortWithStatus(400)
	} else {
		c.JSON(200, user)
	}
}
