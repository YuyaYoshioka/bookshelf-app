package services

import (
	"github.com/gin-gonic/gin"
	"github.com/YuyaYoshioka/bookshelf-app/server/db"
	"github.com/YuyaYoshioka/bookshelf-app/server/entity"
)

type GenreService struct{}

type Genre entity.Genre

func (s GenreService) CreateModel(c *gin.Context) (Genre, error) {
	db := db.GetDB()
	var genre Genre

	if err := c.BindJSON(&genre); err != nil {
		return genre, err
	}

	if err := db.Create(&genre).Error; err != nil {
		return genre, err
	}

	return genre, nil
}
