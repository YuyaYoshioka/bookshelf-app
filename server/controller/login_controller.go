package controllers

import (
	"github.com/YuyaYoshioka/bookshelf-app/server/service"
	"github.com/gin-gonic/gin"
)

type LoginController struct {}

func (pc LoginController) Show(c *gin.Context) {
	name := c.Query("name")
	var service user.Service
	user, err := service.GetByName(name)

	if err != nil {
		c.AbortWithStatus(400)
	} else {
		c.JSON(200, user)
	}
}
