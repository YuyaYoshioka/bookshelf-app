package user

import (
	"github.com/YuyaYoshioka/bookshelf-app/server/service"
	"github.com/gin-gonic/gin"
)

type Controller struct {}

func (pc Controller) Create(c *gin.Context) {
	var service user.Service
	user, err := service.CreateModel(c)

	if err != nil {
		c.AbortWithStatus(400)
	} else {
		c.JSON(201, user)
	}
}

func (pc Controller) Show(c *gin.Context) {
	id := c.Params.ByName("id")
	var service user.Service
	user, err := service.GetById(id)

	if err != nil {
		c.AbortWithStatus(400)
	} else {
		c.JSON(200, user)
	}
}
