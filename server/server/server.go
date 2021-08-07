package server

import (
	"github.com/gin-gonic/gin"
	"github.com/YuyaYoshioka/bookshelf-app/server/controller"
)

func Init() {
	r := router()
	r.Run()
}

func router() *gin.Engine {
	r := gin.Default()
	
	t := r.Group("/users")
	{
		ctrl := user.Controller{}
		t.POST("", ctrl.Create)
	}

	return r
}
